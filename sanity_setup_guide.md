# Sanity Studio Setup Guide

To make the Insights page fully functional with real data, follow these steps to set up your Sanity Studio and project.

## 1. Get Your Sanity Project Credentials

1. Go to [Sanity Manage](https://www.sanity.io/manage).
2. Create a new project (or select an existing one).
3. Copy the **Project ID** and **Dataset** (usually `production`).
4. Update your `.env.local` file:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID="your-project-id"
NEXT_PUBLIC_SANITY_DATASET="production"
```

## 2. Define the Schemas

In your Sanity Studio project, add the following schema definitions.

### `category.js`

```javascript
export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' } },
  ],
}
```

### `insight.js`

```javascript
export default {
  name: 'insight',
  title: 'Insight',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'category', title: 'Category', type: 'reference', to: [{ type: 'category' }] },
    { name: 'publishedAt', title: 'Published At', type: 'datetime' },
    { name: 'mainImage', title: 'Main Image', type: 'image', options: { hotspot: true } },
    { name: 'excerpt', title: 'Excerpt', type: 'text' },
    { name: 'content', title: 'Content', type: 'array', of: [{ type: 'block' }, { type: 'image' }] },
    { 
      name: 'seo', 
      title: 'SEO', 
      type: 'object',
      fields: [
        { name: 'metaTitle', title: 'Meta Title', type: 'string' },
        { name: 'metaDescription', title: 'Meta Description', type: 'text' },
      ]
    },
  ],
}
```

## 3. Verify CORS Settings
Ensure your local development URL (e.g., `http://localhost:3000`) is added to the **API > CORS Origins** section in Sanity Manage.

## 4. Summary of Changes in Frontend

- **Dependencies**: Installed `next-sanity`, `@sanity/image-url`, `@portabletext/react`.
- **Utilities**: Created `src/lib/sanity.ts` and `src/lib/sanityContent.tsx`.
- **Details Page**: Updated `src/app/insights/[slug]/page.tsx` with the new design and dynamic fetching.
