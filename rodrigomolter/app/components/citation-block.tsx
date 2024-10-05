import { FaQuoteRight } from "react-icons/fa6"

export function CitationBlock({
  Quote,
  Author,
  Title,
  Reference,
}: {
  Quote: string
  Author: string
  Title?: string
  Reference?: string
}) {
  return (
    <figure className="max-w-screen-md mx-auto text-left">
      <FaQuoteRight className="w-10 h-10 mx-auto mb-3 text-accent" />
      <blockquote>
        <p className="italic">{Quote}</p>
      </blockquote>
      <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
        <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
          <cite className="pe-3 font-medium">{Author}</cite>
          <cite className="ps-3 text-sm">
            {Reference ? (
              <a href={Reference} target="_blank" className="link">
                {Title}
              </a>
            ) : (
              Title
            )}
          </cite>
        </div>
      </figcaption>
    </figure>
  )
}
