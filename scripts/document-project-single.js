// scripts/document-project-single.js
import { execSync } from 'child_process'
import { createHash } from 'crypto'
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.join(__dirname, '..')
const docsDir = path.join(rootDir, '.reference-files')

// File patterns to analyze more deeply
const COMPONENT_PATTERNS = ['.tsx', '.jsx']
const CONFIG_FILES = [
  'package.json',
  'tsconfig.json',
  'tailwind.config.ts',
  'tailwind.config.js',
  'next.config.js',
  'next.config.mjs',
  'eslint.config.js',
  '.eslintrc.js',
  '.eslintrc.json',
  '.prettierrc',
  '.prettierrc.js',
  'postcss.config.js',
]
const IGNORE_DIRS = ['node_modules', '.git', '.next', 'out', 'dist', 'build', '.vercel']
const IGNORE_FILES = ['.DS_Store', '*.log', '*.lock', 'yarn.lock', 'package-lock.json']

// Create necessary directories
async function createDirectories() {
  await fs.mkdir(docsDir, { recursive: true })
}

// Main document generation
async function generateDocument() {
  let document = `# Project Documentation for v0\n\n`
  document += `Generated: ${new Date().toLocaleString()}\n\n`
  document += `## Table of Contents\n\n`
  document += `1. [Project Summary](#project-summary)\n`
  document += `2. [Configuration Files](#configuration-files)\n`
  document += `3. [Project Structure](#project-structure)\n`
  document += `4. [Component Patterns](#component-patterns)\n`
  document += `5. [Code Generation Guidelines](#code-generation-guidelines)\n\n`

  // Add project summary
  document += await generateProjectSummary()

  // Add configuration files
  document += await documentConfigFiles()

  // Add file structure
  const { files, filesByExt } = await generateFileStructure()
  document += files

  // Add component patterns
  document += await analyzeComponentPatterns(filesByExt)

  // Add code generation guidelines
  document += await generateCompatibilityGuidelines()

  return document
}

// Generate project summary
async function generateProjectSummary() {
  console.log('Generating project summary...')

  try {
    // Read package.json
    const packageJsonPath = path.join(rootDir, 'package.json')
    const packageJson = JSON.parse(await fs.readFile(packageJsonPath, 'utf8'))

    let markdown = `## Project Summary\n\n`

    // Basic project info
    markdown += `### Project Information\n\n`
    markdown += `- **Name**: ${packageJson.name}\n`
    markdown += `- **Version**: ${packageJson.version}\n`
    markdown += `- **Description**: ${packageJson.description || 'No description provided'}\n`
    markdown += `- **Private**: ${packageJson.private ? 'Yes' : 'No'}\n\n`

    // Key dependencies
    markdown += `### Key Dependencies\n\n`
    markdown += `#### Core\n\n`
    const coreDeps = ['react', 'react-dom', 'next'].filter((dep) => packageJson.dependencies?.[dep])
    for (const dep of coreDeps) {
      markdown += `- **${dep}**: ${packageJson.dependencies[dep]}\n`
    }

    markdown += `\n#### UI Libraries\n\n`
    const uiLibs = Object.keys(packageJson.dependencies || {}).filter(
      (dep) =>
        dep.includes('ui') ||
        dep.includes('radix') ||
        dep.includes('shadcn') ||
        dep.includes('chakra') ||
        dep.includes('material') ||
        dep === 'framer-motion'
    )

    for (const lib of uiLibs) {
      markdown += `- **${lib}**: ${packageJson.dependencies[lib]}\n`
    }

    markdown += `\n#### State Management\n\n`
    const stateMgmt = Object.keys(packageJson.dependencies || {}).filter(
      (dep) =>
        dep.includes('redux') ||
        dep.includes('zustand') ||
        dep.includes('recoil') ||
        dep.includes('jotai') ||
        dep.includes('mobx')
    )

    if (stateMgmt.length > 0) {
      for (const lib of stateMgmt) {
        markdown += `- **${lib}**: ${packageJson.dependencies[lib]}\n`
      }
    } else {
      markdown += `- No dedicated state management library detected\n`
    }

    // Development environment
    markdown += `\n### Development Environment\n\n`
    markdown += `#### TypeScript Configuration\n\n`

    try {
      const tsConfigPath = path.join(rootDir, 'tsconfig.json')
      const tsConfig = JSON.parse(await fs.readFile(tsConfigPath, 'utf8'))

      markdown += `- **Target**: ${tsConfig.compilerOptions?.target || 'Not specified'}\n`
      markdown += `- **Module**: ${tsConfig.compilerOptions?.module || 'Not specified'}\n`
      markdown += `- **JSX**: ${tsConfig.compilerOptions?.jsx || 'Not specified'}\n`
      markdown += `- **Strict Mode**: ${tsConfig.compilerOptions?.strict ? 'Enabled' : 'Disabled'}\n`

      if (tsConfig.compilerOptions?.paths) {
        markdown += `- **Path Aliases**:\n`
        for (const [alias, paths] of Object.entries(tsConfig.compilerOptions.paths)) {
          markdown += `  - \`${alias}\` → \`${paths.join(', ')}\`\n`
        }
      }
    } catch (error) {
      markdown += `- TypeScript configuration not found or invalid\n`
    }

    // Project structure summary
    markdown += `\n### Project Structure Summary\n\n`

    // Check for app directory (App Router)
    const hasAppDir = await fs
      .stat(path.join(rootDir, 'app'))
      .then(() => true)
      .catch(() => false)
    // Check for pages directory (Pages Router)
    const hasPagesDir = await fs
      .stat(path.join(rootDir, 'pages'))
      .then(() => true)
      .catch(() => false)

    markdown += `- **Next.js Router**: ${hasAppDir ? 'App Router' : hasPagesDir ? 'Pages Router' : 'Unknown'}\n`

    // Check for common directories
    const commonDirs = ['components', 'lib', 'utils', 'hooks', 'styles', 'public', 'api']
    for (const dir of commonDirs) {
      const exists = await fs
        .stat(path.join(rootDir, dir))
        .then(() => true)
        .catch(() => false)
      if (exists) {
        markdown += `- **${dir}**: Present\n`
      }
    }

    return markdown + '\n\n'
  } catch (error) {
    console.error('Error generating project summary:', error)
    return '## Project Summary\n\nError generating project summary\n\n'
  }
}

// Copy and document configuration files
async function documentConfigFiles() {
  console.log('Documenting configuration files...')

  let configMarkdown = `## Configuration Files\n\n`

  for (const configFile of CONFIG_FILES) {
    try {
      const filePath = path.join(rootDir, configFile)
      const exists = await fs
        .stat(filePath)
        .then(() => true)
        .catch(() => false)

      if (exists) {
        // Add to markdown
        const content = await fs.readFile(filePath, 'utf8')
        configMarkdown += `### ${configFile}\n\n`
        configMarkdown += '```' + (configFile.endsWith('json') ? 'json' : 'javascript') + '\n'
        configMarkdown += content
        configMarkdown += '\n```\n\n'
      }
    } catch (error) {
      console.error(`Error processing ${configFile}:`, error)
    }
  }

  return configMarkdown
}

// Generate a file listing with metadata
async function generateFileStructure() {
  console.log('Generating file structure documentation...')

  const ignorePattern = IGNORE_DIRS.map((dir) => `-not -path "*/${dir}/*"`).join(' ')
  const cmd = `find . -type f ${ignorePattern} | sort`

  try {
    const stdout = execSync(cmd, { cwd: rootDir }).toString()
    const files = stdout.split('\n').filter(Boolean)

    // Group files by directory and extension
    const filesByDir = {}
    const filesByExt = {}

    for (const file of files) {
      // Skip files in the ignore list
      if (
        IGNORE_FILES.some((pattern) => {
          if (pattern.includes('*')) {
            const regex = new RegExp(pattern.replace('*', '.*'))
            return regex.test(path.basename(file))
          }
          return path.basename(file) === pattern
        })
      )
        continue

      const dir = path.dirname(file)
      const ext = path.extname(file)

      if (!filesByDir[dir]) filesByDir[dir] = []
      filesByDir[dir].push(file)

      if (!filesByExt[ext]) filesByExt[ext] = []
      filesByExt[ext].push(file)
    }

    // Generate markdown
    let markdown = `## Project Structure\n\n`
    markdown += `Total files: ${files.length}\n\n`

    // Directory structure
    markdown += `### Directories\n\n`
    for (const [dir, files] of Object.entries(filesByDir)) {
      markdown += `#### ${dir}\n\n`
      for (const file of files) {
        markdown += `- ${path.basename(file)}\n`
      }
      markdown += '\n'
    }

    // Files by extension
    markdown += `### Files by Extension\n\n`
    for (const [ext, files] of Object.entries(filesByExt)) {
      if (!ext) continue // Skip files with no extension
      markdown += `#### ${ext} (${files.length} files)\n\n`
      markdown += `<details>\n<summary>Show files</summary>\n\n`
      for (const file of files) {
        markdown += `- ${file}\n`
      }
      markdown += `\n</details>\n\n`
    }

    return { files: markdown, filesByExt }
  } catch (error) {
    console.error('Error generating file structure:', error)
    return { files: '## Project Structure\n\nError generating file structure\n\n', filesByExt: {} }
  }
}

// Analyze component patterns
async function analyzeComponentPatterns(filesByExt) {
  console.log('Analyzing component patterns...')

  const componentFiles = []

  // Collect all component files
  for (const ext of COMPONENT_PATTERNS) {
    if (filesByExt[ext]) {
      componentFiles.push(...filesByExt[ext])
    }
  }

  if (componentFiles.length === 0) {
    console.log('No component files found to analyze.')
    return '## Component Patterns\n\nNo component files found to analyze.\n\n'
  }

  // Sample up to 5 representative components
  const sampleSize = Math.min(5, componentFiles.length)
  const sampledComponents = []

  // Prioritize components from different directories
  const dirMap = {}
  for (const file of componentFiles) {
    const dir = path.dirname(file)
    if (!dirMap[dir]) dirMap[dir] = []
    dirMap[dir].push(file)
  }

  // Take one from each directory until we reach the sample size
  const dirs = Object.keys(dirMap)
  let i = 0
  while (sampledComponents.length < sampleSize && i < dirs.length) {
    if (dirMap[dirs[i]].length > 0) {
      sampledComponents.push(dirMap[dirs[i]].shift())
    } else {
      i++
    }
  }

  // If we still need more, take randomly from the remaining files
  const remaining = componentFiles.filter((file) => !sampledComponents.includes(file))
  while (sampledComponents.length < sampleSize && remaining.length > 0) {
    const randomIndex = Math.floor(Math.random() * remaining.length)
    sampledComponents.push(remaining[randomIndex])
    remaining.splice(randomIndex, 1)
  }

  // Analyze and document each sampled component
  let patternsMarkdown = `## Component Patterns\n\n`
  patternsMarkdown += `This section contains ${sampledComponents.length} representative components from your project.\n\n`

  for (const componentFile of sampledComponents) {
    try {
      const content = await fs.readFile(path.join(rootDir, componentFile), 'utf8')

      // Add to markdown
      patternsMarkdown += `### ${componentFile}\n\n`
      patternsMarkdown += '```tsx\n'
      patternsMarkdown += content
      patternsMarkdown += '\n```\n\n'

      // Basic analysis
      const analysis = analyzeComponent(content, componentFile)
      patternsMarkdown += `#### Analysis\n\n`
      patternsMarkdown += `- **Type**: ${analysis.type}\n`
      patternsMarkdown += `- **Imports**: ${analysis.imports.length} dependencies\n`
      if (analysis.imports.length > 0) {
        patternsMarkdown += `  - ${analysis.imports.join('\n  - ')}\n`
      }
      patternsMarkdown += `- **Props Interface**: ${analysis.hasPropsInterface ? 'Yes' : 'No'}\n`
      patternsMarkdown += `- **Hooks Used**: ${analysis.hooks.join(', ') || 'None'}\n`
      patternsMarkdown += `- **Styling**: ${analysis.styling.join(', ') || 'None detected'}\n\n`
    } catch (error) {
      console.error(`Error analyzing ${componentFile}:`, error)
    }
  }

  return patternsMarkdown
}

// Simple component analysis
function analyzeComponent(content, filePath) {
  const analysis = {
    type: 'Unknown',
    imports: [],
    hasPropsInterface: false,
    hooks: [],
    styling: [],
  }

  // Determine component type
  if (content.includes("'use client'") || content.includes('"use client"')) {
    analysis.type = 'Client Component'
  } else if (
    filePath.includes('/app/') &&
    !content.includes("'use client'") &&
    !content.includes('"use client"')
  ) {
    analysis.type = 'Server Component'
  } else if (content.includes('export default function')) {
    analysis.type = 'Function Component'
  } else if (content.includes('export default class')) {
    analysis.type = 'Class Component'
  }

  // Extract imports
  const importRegex = /import\s+(?:{[^}]*}|\w+)\s+from\s+['"]([^'"]+)['"]/g
  let match
  while ((match = importRegex.exec(content)) !== null) {
    analysis.imports.push(match[1])
  }

  // Check for Props interface
  analysis.hasPropsInterface = /interface\s+\w*Props/.test(content)

  // Detect hooks
  const hooksRegex = /use[A-Z]\w+/g
  const hooksMatches = content.match(hooksRegex) || []
  analysis.hooks = [...new Set(hooksMatches)]

  // Detect styling approaches
  if (content.includes('className=')) {
    analysis.styling.push('Tailwind/CSS Classes')
  }
  if (content.includes('style=')) {
    analysis.styling.push('Inline Styles')
  }
  if (content.includes('styled.')) {
    analysis.styling.push('Styled Components')
  }
  if (content.includes('@emotion/')) {
    analysis.styling.push('Emotion')
  }

  return analysis
}

// Generate compatibility guidelines
async function generateCompatibilityGuidelines() {
  console.log('Generating compatibility guidelines...')

  let markdown = `## Code Generation Guidelines\n\n`
  markdown += `This section provides guidelines for generating code that is compatible with this project.\n\n`

  // Read package.json
  try {
    const packageJsonPath = path.join(rootDir, 'package.json')
    const packageJson = JSON.parse(await fs.readFile(packageJsonPath, 'utf8'))

    // React version compatibility
    const reactVersion = packageJson.dependencies?.react || ''
    markdown += `### React Compatibility\n\n`
    markdown += `- **React Version**: ${reactVersion}\n`

    if (reactVersion.startsWith('18')) {
      markdown += `- Use React 18 features like automatic batching and concurrent rendering\n`
      markdown += `- Can use hooks like useId(), useSyncExternalStore(), useInsertionEffect()\n`
      markdown += `- Use Suspense for data fetching when appropriate\n`
    } else if (reactVersion.startsWith('17')) {
      markdown += `- Avoid React 18 specific features\n`
      markdown += `- Use standard React 17 patterns\n`
    }

    // Next.js compatibility
    const nextVersion = packageJson.dependencies?.next || ''
    markdown += `\n### Next.js Compatibility\n\n`
    markdown += `- **Next.js Version**: ${nextVersion}\n`

    if (
      nextVersion.startsWith('13') ||
      nextVersion.startsWith('14') ||
      nextVersion.startsWith('15')
    ) {
      markdown += `- Use App Router patterns when possible\n`
      markdown += `- Leverage Server Components by default\n`
      markdown += `- Use 'use client' directive for Client Components\n`
      markdown += `- Use Next.js built-in data fetching methods\n`
    } else if (nextVersion.startsWith('12')) {
      markdown += `- Use Pages Router patterns\n`
      markdown += `- Use getStaticProps/getServerSideProps for data fetching\n`
    }

    // TypeScript compatibility
    const tsVersion = packageJson.devDependencies?.typescript || ''
    markdown += `\n### TypeScript Compatibility\n\n`
    markdown += `- **TypeScript Version**: ${tsVersion}\n`
    markdown += `- Use explicit type annotations for function parameters and return types\n`
    markdown += `- Define interfaces for component props\n`
    markdown += `- Use type imports: \`import type { X } from 'y'\`\n`

    // UI component patterns
    markdown += `\n### UI Component Patterns\n\n`

    // Check for UI libraries
    const uiLibs = []
    if (packageJson.dependencies?.['@radix-ui/react-primitive']) uiLibs.push('Radix UI')
    if (Object.keys(packageJson.dependencies || {}).some((dep) => dep.startsWith('@chakra-ui/')))
      uiLibs.push('Chakra UI')
    if (Object.keys(packageJson.dependencies || {}).some((dep) => dep.startsWith('@mui/')))
      uiLibs.push('Material UI')
    if (packageJson.dependencies?.['tailwindcss']) uiLibs.push('Tailwind CSS')

    if (uiLibs.length > 0) {
      markdown += `- **UI Libraries**: ${uiLibs.join(', ')}\n`

      if (uiLibs.includes('Tailwind CSS')) {
        markdown += `- Use Tailwind CSS classes for styling\n`
        markdown += `- Follow the project's existing class naming patterns\n`
        markdown += `- Use the cn() utility for conditional classes\n`
      }

      if (uiLibs.includes('Radix UI')) {
        markdown += `- Use Radix UI components for accessible UI elements\n`
        markdown += `- Follow the shadcn/ui patterns if present\n`
      }
    } else {
      markdown += `- No specific UI library detected, follow the project's existing styling patterns\n`
    }

    // File naming conventions
    markdown += `\n### File Naming Conventions\n\n`

    // Try to detect naming conventions from the components directory
    try {
      const componentsDir = path.join(rootDir, 'components')
      const files = await fs.readdir(componentsDir)

      const kebabCase = files.some((file) => file.includes('-'))
      const camelCase = files.some((file) => /^[a-z][a-zA-Z0-9]*\./.test(file))
      const pascalCase = files.some((file) => /^[A-Z][a-zA-Z0-9]*\./.test(file))

      if (kebabCase) {
        markdown += `- Use kebab-case for file names (e.g., \`button-group.tsx\`)\n`
      } else if (camelCase) {
        markdown += `- Use camelCase for file names (e.g., \`buttonGroup.tsx\`)\n`
      } else if (pascalCase) {
        markdown += `- Use PascalCase for file names (e.g., \`ButtonGroup.tsx\`)\n`
      } else {
        markdown += `- No clear file naming convention detected, follow existing patterns\n`
      }
    } catch (error) {
      markdown += `- No components directory found, follow existing patterns in the project\n`
    }

    // Check for prettier config
    try {
      const prettierPath = path.join(rootDir, '.prettierrc.js')
      const prettierExists = await fs
        .stat(prettierPath)
        .then(() => true)
        .catch(() => false)

      if (prettierExists) {
        markdown += `\n### Code Formatting\n\n`
        markdown += `- Project uses Prettier for code formatting\n`

        // Try to extract key prettier settings
        const prettierContent = await fs.readFile(prettierPath, 'utf8')
        if (prettierContent.includes('semi: false')) {
          markdown += `- Don't use semicolons at the end of statements\n`
        }
        if (prettierContent.includes('singleQuote: true')) {
          markdown += `- Use single quotes for strings\n`
        }
        const printWidthMatch = prettierContent.match(/printWidth:\s*(\d+)/)
        if (printWidthMatch) {
          markdown += `- Keep lines under ${printWidthMatch[1]} characters\n`
        }
      }
    } catch (error) {
      // Ignore error
    }

    return markdown
  } catch (error) {
    console.error('Error generating compatibility guidelines:', error)
    return '## Code Generation Guidelines\n\nError generating compatibility guidelines\n\n'
  }
}

// Main function
async function main() {
  console.log('Starting project documentation generation...')

  try {
    await createDirectories()
    const document = await generateDocument()

    // Write the single document
    const outputPath = path.join(docsDir, 'v0-project-documentation.md')
    await fs.writeFile(outputPath, document)

    console.log('\n✅ Project documentation completed successfully!')
    console.log(`Documentation available at: ${path.relative(rootDir, outputPath)}`)
  } catch (error) {
    console.error('Error generating project documentation:', error)
  }
}

main()
