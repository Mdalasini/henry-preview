import Image from "next/image";

interface Props {
  quote: string;
  author: string;
  authorRole: string;
  imageUrl: string;
}

export function Testimonial({ quote, author, authorRole, imageUrl }: Props) {
  return (
    <figure className="max-w-2xl mx-auto my-12">
      <blockquote>
        <p className="text-lg italic font-medium text-gray-900">"{quote}"</p>
      </blockquote>
      <figcaption className="flex items-center mt-6 space-x-3">
        <Image
          className="w-12 h-12 rounded-full object-cover"
          src={imageUrl}
          alt={author}
          width={48}
          height={48}
        />
        <div className="flex items-center divide-x-2 divide-gray-500">
          <cite className="pr-3 text-base font-medium text-gray-900">
            {author}
          </cite>
          <cite className="pl-3 text-sm text-gray-500">{authorRole}</cite>
        </div>
      </figcaption>
    </figure>
  );
}
