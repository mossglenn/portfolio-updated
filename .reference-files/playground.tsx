
// app/playground/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function PlaygroundPage() {
  return (
    <main className="p-8 space-y-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">UI Component Playground</h1>

      {/* Buttons */}
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Buttons</h2>
        <div className="flex gap-4 flex-wrap">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button disabled>Disabled</Button>
        </div>
      </section>

      {/* Cards */}
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Card</h2>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Example Card</CardTitle>
          </CardHeader>
          <CardContent>
            <p>This is a simple card using your current theme tokens and styling.</p>
          </CardContent>
        </Card>
      </section>

      {/* Form Inputs */}
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Form Elements</h2>
        <div className="flex flex-col gap-4 max-w-sm">
          <Input placeholder="Example input" />
          <Switch id="example-switch" />
        </div>
      </section>

      {/* Tabs */}
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Tabs</h2>
        <Tabs defaultValue="tab1" className="w-full max-w-md">
          <TabsList>
            <TabsTrigger value="tab1">Tab One</TabsTrigger>
            <TabsTrigger value="tab2">Tab Two</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            <p>This is the content for tab one.</p>
          </TabsContent>
          <TabsContent value="tab2">
            <p>This is the content for tab two.</p>
          </TabsContent>
        </Tabs>
      </section>
    </main>
  );
}
