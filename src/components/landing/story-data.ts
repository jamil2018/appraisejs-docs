export const story = {
  name: "Google Meeting Reminders",
  prompt:
    "Build reminders for my Google meetings. Use AppraiseJS before implementation.",
  reply: "I’ll create a plan for your review before writing any code.",
  decisions: [
    "Connect Calendar",
    "Reminder Timing",
    "Notification Delivery",
    "Changed Meetings",
  ],
  requirement: "Users can choose any reminder between 5 minutes and 24 hours.",
  feedback: "Let users choose any reminder between 5 minutes and 24 hours.",
  validation: {
    given: "a meeting begins in 30 minutes",
    when: "the user selects a 15-minute reminder",
    then: "the reminder arrives 15 minutes before the meeting",
  },
} as const;
