import dateFormat from "@lib/utils/dateFormat";
import { humanize, slugify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";
import config from "@config/config.json";

const SimilarPosts = ({ posts }) => {
  const { summary_length } = config.settings;

  return (
    <div className="row justify-center">
      {posts.map((post, i) => (
        <div key={`key-${i}`} className={"col-12 mb-4 sm:col-4"}>
          {post.frontmatter.image && (
            <Image
              className="rounded-lg w-full h-64 object-cover sm:h-48 md:h-64 lg:h-80 xl:h-96"
              src={post.frontmatter.image}
              alt={post.frontmatter.title}
              width={1000}
              height={1000}
              loading={"lazy"}
            />
          )}
          <ul className="mt-4 text-text">
            <li className="mb-2 mr-4 inline-block">
              {dateFormat(post.frontmatter.date)}
            </li>
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
          <h3 className="h4">
            <Link href={`/${post.slug}`} className="block hover:text-primary">
              {post.frontmatter.title}
            </Link>
          </h3>
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

export default SimilarPosts;
