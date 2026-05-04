// Migration script to populate Sanity with sample content
// Run this with: node migrate-content.js

const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: 'k9qzu7ux',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_TOKEN, // You'll need to set this in your environment
  apiVersion: '2024-01-01',
});

// Sample categories
const categories = [
  {
    _type: 'category',
    name: 'Tax Litigation',
    slug: { current: 'tax-litigation' },
    description: 'Legal insights and updates related to tax litigation',
    color: '#3B82F6'
  },
  {
    _type: 'category',
    name: 'GST Law',
    slug: { current: 'gst-law' },
    description: 'GST related legal updates and insights',
    color: '#10B981'
  },
  {
    _type: 'category',
    name: 'Insolvency Law',
    slug: { current: 'insolvency-law' },
    description: 'Insolvency and bankruptcy law updates',
    color: '#F59E0B'
  },
  {
    _type: 'category',
    name: 'Consumer Law',
    slug: { current: 'consumer-law' },
    description: 'Consumer protection and dispute resolution',
    color: '#EF4444'
  }
];

// Sample blog posts
const blogPosts = [
  {
    _type: 'blogPost',
    title: 'Interim Relief Granted in TDS Prosecution: A Notable Decision by Allahabad High Court',
    slug: { current: 'interim-relief-tds-prosecution' },
    excerpt: 'The Hon\'ble High Court of Allahabad has granted interim relief to two applicants in a case concerning delayed deposit of Tax Deducted at Source (TDS). The decision is noteworthy for its interpretation of Section 276B of the Income Tax Act.',
    content: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'In a significant development in the realm of tax litigation, the Hon\'ble High Court of Allahabad has granted interim relief to two applicants in a case concerning delayed deposit of Tax Deducted at Source (TDS). The decision is noteworthy for its interpretation of Section 276B of the Income Tax Act, especially in situations where tax liabilities, although paid late, are regularized with interest and penalty.'
          }
        ]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'This case highlights a growing judicial inclination to distinguish between deliberate tax evasion and procedural lapses that are later rectified. It brings much-needed clarity and relief to taxpayers and directors who may face prosecution for technical defaults.'
          }
        ]
      },
      {
        _type: 'block',
        style: 'h3',
        children: [
          {
            _type: 'span',
            text: 'Background of the Case'
          }
        ]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'The matter pertains to the Financial Year 2018–19, during which the applicants, including Mr. Geetamber Anand (Director), were alleged to have defaulted in depositing TDS within the prescribed time. However, the tax dues were eventually paid along with interest and penalty, which, according to the applicants, removes the element of "wilful failure" to pay tax as required under Section 276B of the Income Tax Act, 1961.'
          }
        ]
      }
    ],
    publishedAt: '2025-07-09T00:00:00Z',
    readTime: '5 min read',
    isNew: true,
    downloadUrl: 'https://example.com/order-download.pdf'
  },
  {
    _type: 'blogPost',
    title: 'NCLT Admits Insolvency Petition for Default in Operational Debt',
    slug: { current: 'nclt-operational-debt-cirp' },
    excerpt: 'A petition under Section 9 of the Insolvency and Bankruptcy Code, 2016 was filed seeking initiation of the Corporate Insolvency Resolution Process (CIRP) against a corporate debtor for default in repayment of operational dues amounting to over ₹11 crore.',
    content: [
      {
        _type: 'block',
        style: 'h3',
        children: [
          {
            _type: 'span',
            text: 'Background'
          }
        ]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'A petition under Section 9 of the Insolvency and Bankruptcy Code, 2016 was filed seeking initiation of the Corporate Insolvency Resolution Process (CIRP) against a corporate debtor for default in repayment of operational dues amounting to over ₹11 crore. The claim arose from unpaid invoices for supply of goods and fabrication services rendered between 2014 and 2018.'
          }
        ]
      }
    ],
    publishedAt: '2025-06-15T00:00:00Z',
    readTime: '4 min read',
    isNew: true,
    downloadUrl: 'https://example.com/nclt-order.pdf'
  }
];

// Sample news updates
const newsUpdates = [
  {
    _type: 'newsUpdate',
    title: 'CLC Advises on the Formation of the India Deep Tech Investment Alliance (IDTA) with $1 Billion Commitments',
    slug: { current: 'clc-advises-idta-formation' },
    excerpt: 'Commercial Law Chambers successfully advised on the formation of the India Deep Tech Investment Alliance, securing $1 billion in investment commitments for deep technology startups.',
    content: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Commercial Law Chambers is pleased to announce its role as legal advisor in the formation of the India Deep Tech Investment Alliance (IDTA), a groundbreaking initiative that has secured $1 billion in investment commitments for deep technology startups across India.'
          }
        ]
      }
    ],
    type: 'deal-corner',
    publishedAt: '2025-09-02T00:00:00Z',
    readTime: '3 min read',
    isNew: true
  },
  {
    _type: 'newsUpdate',
    title: 'Decoding Downstream Investment',
    slug: { current: 'decoding-downstream-investment' },
    excerpt: 'Our latest publication provides comprehensive insights into downstream investment regulations and compliance requirements for foreign investors.',
    content: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'This comprehensive guide covers the intricate regulatory framework surrounding downstream investments in India, providing practical insights for foreign investors and domestic companies alike.'
          }
        ]
      }
    ],
    type: 'publication',
    publishedAt: '2025-08-28T00:00:00Z',
    readTime: '4 min read',
    isNew: false
  }
];

async function migrateContent() {
  try {
    console.log('Starting content migration...');

    // First, create categories
    console.log('Creating categories...');
    const createdCategories = [];
    for (const category of categories) {
      const result = await client.create(category);
      createdCategories.push(result);
      console.log(`Created category: ${category.name}`);
    }

    // Create blog posts with category references
    console.log('Creating blog posts...');
    for (let i = 0; i < blogPosts.length; i++) {
      const blogPost = {
        ...blogPosts[i],
        category: {
          _type: 'reference',
          _ref: createdCategories[i % createdCategories.length]._id
        }
      };
      const result = await client.create(blogPost);
      console.log(`Created blog post: ${blogPost.title}`);
    }

    // Create news updates
    console.log('Creating news updates...');
    for (const newsUpdate of newsUpdates) {
      const result = await client.create(newsUpdate);
      console.log(`Created news update: ${newsUpdate.title}`);
    }

    console.log('Content migration completed successfully!');
  } catch (error) {
    console.error('Migration failed:', error);
  }
}

// Only run if this file is executed directly
if (require.main === module) {
  migrateContent();
}

module.exports = { migrateContent };
