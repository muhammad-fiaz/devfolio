import config from "@config/config.json";
import dateFormat from "@lib/utils/dateFormat";
import { humanize, slugify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

const Posts = ({ posts, authors, className }) => {
  const { summary_length } = config.settings;
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ${className}`}>
      {posts.map((post, i) => (
        <div key={`key-${i}`} className="flex flex-col">
          {post.frontmatter.image && (
            <div className="relative h-0" style={{ paddingBottom: "56.25%" }}>
              <Link href={`/${slugify(post.slug)}`} className="cursor-pointer">

              <Image
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300 ease-in-out cursor-pointer hover:shadow-lg"
                width={1000}
                height={1000}
                src={post.frontmatter.image}
                alt={post.frontmatter.title}
                priority={i === 0}
                loading={i === 0 ? "eager" : "lazy"}
              />
              </Link>
            </div>
          )}
          <ul className="mt-4 mb-4 flex flex-wrap items-center space-x-3 text-text">
            {/* Author */}
            <li>
              {authors
                .filter((author) =>
                  post.frontmatter.authors
                    .map((author) => slugify(author))
                    .includes(slugify(author.frontmatter.title))
                )
                .map((author, i) => (
                  <Link
                    href={`/authors/${slugify(author.frontmatter.title)}`}
                    key={`author-${i}`}
                    className="flex items-center hover:text-primary"
                  >
                    {author.frontmatter.image && (
                      <Image
                        src={author.frontmatter.image}
                        alt={author.frontmatter.title}
                        height={50}
                        width={50}
                        className="mr-2 h-6 w-6 rounded-full"
                      />
                    )}
                    <span>{author.frontmatter.title}</span>
                  </Link>
                ))}
            </li>
            {/* Date */}
            <li>{dateFormat(post.frontmatter.date)}</li>
            {/* Categories */}
            <li>
              <ul>
                {post.frontmatter.categories.slice(0, 2).map((category, i) => (
                  <li className="inline-block" key={`category-${i}`}>
                    <Link
                      href={`/categories/${slugify(category)}`}
                      className="mr-3 hover:text-primary"
                    >
                      &#9635; {humanize(category)}
                    </Link>
                  </li>
                ))}
                {post.frontmatter.categories.length > 2 && (
                  <li className="inline-block">
                    <Link href={`/${slugify(post.slug)}`} className="hover:text-primary">
                      &#9635; More...
                    </Link>
                  </li>
                )}
              </ul>
            </li>
          </ul>
          {/* Title */}
          <h3 className="mb-2">
            <Link href={`/${post.slug}`} className="block hover:text-primary">
              {post.frontmatter.title}
            </Link>
          </h3>
          {/* Description */}
          <p className="text-text">
            {post.frontmatter.description && post.frontmatter.description.length > summary_length
              ? `${post.frontmatter.description.slice(0, summary_length)}...`
              : post.frontmatter.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
