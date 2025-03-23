// scripts/move-unused-files.ts
import path from 'path'
import fs from 'fs'
import { mkdir } from 'fs/promises'
import { execa } from 'execa'

const UNUSED_FILES = [
  'components/call-to-action.tsx',
  'components/featured-projects.tsx',
  'components/hero.tsx',
  'components/markdown-content.tsx',
  'components/portfolio-categories.tsx',
  'components/portfolio-grid.tsx',
  'components/portfolio-nav.tsx',
  'components/project-layout.tsx',
  'components/skills.tsx',
  'components/theme-toggle.tsx',
  'components/ui/accordion.tsx',
  'components/ui/alert-dialog.tsx',
  'components/ui/alert.tsx',
  'components/ui/aspect-ratio.tsx',
  'components/ui/avatar.tsx',
  'components/ui/breadcrumb.tsx',
  'components/ui/calendar.tsx',
  'components/ui/carousel.tsx',
  'components/ui/chart.tsx',
  'components/ui/checkbox.tsx',
  'components/ui/collapsible.tsx',
  'components/ui/command.tsx',
  'components/ui/context-menu.tsx',
  'components/ui/dialog.tsx',
  'components/ui/drawer.tsx',
  'components/ui/dropdown-menu.tsx',
  'components/ui/form.tsx',
  'components/ui/hover-card.tsx',
  'components/ui/input-otp.tsx',
  'components/ui/menubar.tsx',
  'components/ui/navigation-menu.tsx',
  'components/ui/popover.tsx',
  'components/ui/progress.tsx',
  'components/ui/radio-group.tsx',
  'components/ui/resizable.tsx',
  'components/ui/scroll-area.tsx',
  'components/ui/select.tsx',
  'components/ui/sheet.tsx',
  'components/ui/skeleton.tsx',
  'components/ui/slider.tsx',
  'components/ui/table.tsx',
  'components/ui/toaster.tsx',
  'components/ui/toggle-group.tsx',
  'components/ui/toggle.tsx',
  'components/ui/tooltip.tsx',
  'components/ui/use-mobile.tsx',
]

const DEST_BASE = '.reference-files/unused-files'

async function moveFilesWithGit() {
  for (const relativePath of UNUSED_FILES) {
    const src = path.resolve(relativePath)
    const dest = path.resolve(DEST_BASE, relativePath)

    if (!fs.existsSync(src)) {
      console.warn(`⚠️  File does not exist: ${relativePath}`)
      continue
    }

    await mkdir(path.dirname(dest), { recursive: true })

    try {
      await execa('git', ['mv', relativePath, path.relative(process.cwd(), dest)])
      console.log(`✅ git moved: ${relativePath} → ${path.relative(process.cwd(), dest)}`)
    } catch (error) {
      console.error(`❌ Failed to move ${relativePath}:`, error)
    }
  }
}

moveFilesWithGit()
