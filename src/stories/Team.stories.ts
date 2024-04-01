import { Meta, StoryObj } from "@storybook/react"
import Team from "../components/Team"

const meta = {
  title: 'Lib/Team',
  component: Team
} satisfies Meta<typeof Team>

type Story = StoryObj<typeof meta>

export default meta

export const Flamengo: Story = {
  args: {
    id: 'fla'
  }
}