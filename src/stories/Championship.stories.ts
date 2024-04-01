import { Meta, StoryObj } from "@storybook/react"
import Championship from "../components/Championship"


const meta = {
  title: 'Lib/Championship',
  component: Championship
} satisfies Meta<typeof Championship>

type Story = StoryObj<typeof meta>

export default meta

export const Brasileirao: Story = {}