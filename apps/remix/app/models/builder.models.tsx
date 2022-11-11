export interface Image {
  src: string;
  alt: string;
}

export interface Link {
  href: string;
  label: string;
}

export interface Blog {
  authors: string[];
  content: string;
  featuredImage: string;
  title: string;
  slug: string;
  excerpt: string;
}

export interface Reference {
  '@type': string;
  id: string;
  model: string;
}

export interface BlogReference extends Reference {
  value: {
    data: Blog;
  };
}

export interface Resource {
  title: string;
  excerpt: string;
  image: Image;
  link: Link;
}
