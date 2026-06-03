export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
}

const STORAGE_KEY = 'alfa_blogs';

const defaultBlogs: BlogPost[] = [
  {
    id: '1',
    title: 'Understanding Income Tax Filing in Pakistan 2024',
    excerpt: 'A comprehensive guide to filing your income tax returns in Pakistan, covering all the essential requirements and deadlines.',
    content: `Income tax filing in Pakistan is a crucial responsibility for every citizen and business entity. The Federal Board of Revenue (FBR) has established clear guidelines that must be followed to ensure compliance with tax laws.

## Key Deadlines

For the tax year 2024, the deadline for filing income tax returns is September 30th for individuals and December 31st for companies. It is essential to file your returns on time to avoid penalties and legal complications.

## Required Documents

To file your income tax return, you will need:
- CNIC copy
- Bank statements
- Salary certificates or business income proofs
- Investment documents
- Property ownership documents
- Any other relevant financial records

## Common Mistakes to Avoid

Many taxpayers make common mistakes that can lead to complications:
1. Underreporting income
2. Missing deadlines
3. Incorrect NTN numbers
4. Not keeping proper documentation

## Benefits of Timely Filing

Filing your taxes on time provides several benefits:
- Avoidance of penalties and fines
- Eligibility for tax refunds
- Better credit standing
- Smooth business operations

At ALFA Corporate & Tax Consultants, we provide expert assistance in tax filing to ensure accuracy and compliance.`,
    image: '/blog1.jpg',
    author: 'Ghulam Akbar Khosa',
    date: '2024-01-15',
    category: 'Tax'
  },
  {
    id: '2',
    title: 'Company Registration Process in Pakistan',
    excerpt: 'Step-by-step guide to registering a new company in Pakistan, from name reservation to incorporation certificate.',
    content: `Starting a business in Pakistan requires proper registration with the Securities and Exchange Commission of Pakistan (SECP). This process ensures your business operates legally and gains credibility in the market.

## Types of Companies

Pakistan offers several business structures:
- Private Limited Company
- Single Member Company
- Public Limited Company
- Limited Liability Partnership
- Sole Proprietorship

## Registration Steps

### 1. Name Reservation
The first step is to reserve a unique company name through the SECP eServices portal. The name must not conflict with existing registered companies.

### 2. Document Preparation
Prepare the following documents:
- Memorandum of Association
- Articles of Association
- CNIC copies of directors
- Registered office address proof
- Paid-up capital details

### 3. Online Submission
Submit all documents through the SECP ePortal along with the required fees.

### 4. Certificate of Incorporation
Upon successful verification, SECP issues the Certificate of Incorporation.

## Post-Registration Requirements

After incorporation, you must:
- Register for NTN with FBR
- Open a corporate bank account
- Register for sales tax if applicable
- Maintain proper accounting records

Our team at ALFA Corporate & Tax Consultants can handle the entire registration process for you efficiently.`,
    image: '/blog2.jpg',
    author: 'ALFA Team',
    date: '2024-02-10',
    category: 'Corporate'
  },
  {
    id: '3',
    title: 'GST Registration and Compliance Guide',
    excerpt: 'Everything you need to know about GST registration, filing returns, and maintaining compliance in Pakistan.',
    content: `The Goods and Services Tax (GST) system in Pakistan is administered by the Federal Board of Revenue (FBR). Understanding GST compliance is essential for businesses to avoid penalties and maintain smooth operations.

## Who Needs GST Registration?

Businesses must register for GST if:
- Annual turnover exceeds PKR 10 million for goods
- Annual turnover exceeds PKR 5 million for services
- Engaged in import/export activities
- Voluntary registration for credibility

## Registration Process

1. Apply through FBR IRIS portal
2. Submit required business documents
3. FBR verification and approval
4. Receive GST registration certificate

## Monthly GST Returns

Registered businesses must file monthly GST returns by the 15th of each month. The return includes:
- Output tax (tax collected on sales)
- Input tax (tax paid on purchases)
- Net tax payable or refundable

## Common GST Issues

- Late filing penalties
- Mismatch in input/output tax
- Incorrect tax calculations
- Missing invoices

## Compliance Best Practices

- Maintain organized invoice records
- File returns before deadlines
- Reconcile accounts regularly
- Seek professional assistance

ALFA Corporate & Tax Consultants provides comprehensive GST services to keep your business compliant.`,
    image: '/blog3.jpg',
    author: 'Ghulam Akbar Khosa',
    date: '2024-03-05',
    category: 'Tax'
  }
];

export function getBlogs(): BlogPost[] {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    return JSON.parse(stored);
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultBlogs));
  return defaultBlogs;
}

export function addBlog(blog: Omit<BlogPost, 'id'>): BlogPost {
  const blogs = getBlogs();
  const newBlog: BlogPost = {
    ...blog,
    id: Date.now().toString(),
  };
  blogs.unshift(newBlog);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(blogs));
  return newBlog;
}

export function deleteBlog(id: string): void {
  const blogs = getBlogs().filter(b => b.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(blogs));
}

export function getBlogById(id: string): BlogPost | undefined {
  return getBlogs().find(b => b.id === id);
}
