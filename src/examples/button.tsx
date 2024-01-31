import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

export function ButtonDemo() {
  return (
  <>
  <Button>Button</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="destructive">Destructive</Button>
  <Button variant="outline">Outline</Button>
  <Button variant="ghost">Ghost</Button>
  <Button variant="link">Link</Button>
  <Button>
      <Mail className="mr-2 h-4 w-4" /> Login with Email
    </Button>
  </>
  )
}
