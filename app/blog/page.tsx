import { BlogPostsTimeline } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description:
    'Thoughts on software engineering, system design, and lessons from building production systems.',
}

export default function Page() {
  return (
    <section>
      <h1 className="mb-2 text-3xl font-semibold tracking-tight">Blog</h1>
      <p className="mb-8 text-neutral-600 dark:text-neutral-400">
        Thoughts on software engineering, system design, and lessons from
        building production systems.
      </p>
      <BlogPostsTimeline />
    </section>
  )
}
