"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { Loader2 } from "lucide-react"

export default function AdminPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const { toast } = useToast()

  const handleLogin = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // In a real implementation, this would be an API call to your backend
      // const response = await fetch('/api/admin/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ username, password })
      // })

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // For demo purposes, hardcoded credentials
      if (username === "admin" && password === "password") {
        setIsAuthenticated(true)
        toast({
          title: "Login successful",
          description: "Welcome to the admin panel",
        })
      } else {
        toast({
          title: "Login failed",
          description: "Invalid username or password",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to login. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Admin Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-sm font-medium mb-2">
                  Username
                </label>
                <Input id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-2">
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Logging in...
                  </>
                ) : (
                  "Login"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-muted/30 p-4">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

        <Tabs defaultValue="projects">
          <TabsList className="mb-8">
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="skills">Skills & Services</TabsTrigger>
          </TabsList>

          <TabsContent value="projects">
            <Card>
              <CardHeader>
                <CardTitle>Manage Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Here you can add, edit, or delete your portfolio projects.</p>
                <div className="text-center py-8">
                  <p>Project management interface would be implemented here.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="messages">
            <Card>
              <CardHeader>
                <CardTitle>Contact Messages</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  View and manage messages submitted through the contact form.
                </p>
                <div className="text-center py-8">
                  <p>Message management interface would be implemented here.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="skills">
            <Card>
              <CardHeader>
                <CardTitle>Skills & Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Update your skills and services offered.</p>
                <div className="text-center py-8">
                  <p>Skills and services management interface would be implemented here.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
