import { Meta, StoryObj } from "@storybook/react"
import Match from "../components/Match"

const meta = {
  title: 'Lib/Match',
  component: Match,
} satisfies Meta<typeof Match>

type Story = StoryObj<typeof meta>

export default meta

export const FlaFlu: Story = {
  args: {
    teamA: "fla",
    teamB: "flu"
  }
}