import { Link } from "wouter";
import { ThumbsUp, MessageSquare } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { formatNumber, getDifficultyClass } from "@/lib/utils";
import Tag from "@/components/tag";

interface VideoCardProps {
  id: number;
  title: string;
  thumbnail: string;
  duration: string;
  difficulty: string;
  creatorName: string;
  creatorInitials: string;
  tags: string[];
  views: number;
  likes: number;
  comments: number;
  layout?: "vertical" | "horizontal";
}

const VideoCard = ({
  id,
  title,
  thumbnail,
  duration,
  difficulty,
  creatorName,
  creatorInitials,
  tags,
  views,
  likes,
  comments,
  layout = "vertical"
}: VideoCardProps) => {
  if (layout === "horizontal") {
    return (
      <Link href={`/video/${id}`}>
        <a className="flex bg-[#1f2937] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition border border-gray-700 hover:border-gray-600">
          <div className="relative w-40 flex-shrink-0">
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-full object-cover"
              style={{ minHeight: "90px" }}
            />
            <div className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white px-1.5 py-0.5 text-xs rounded">
              {duration}
            </div>
            <div className={`absolute top-1 right-1 ${getDifficultyClass(difficulty)} px-1.5 py-0.5 text-xs rounded`}>
              {difficulty}
            </div>
          </div>
          <div className="p-3 flex-1">
            <h3 className="text-base font-medium text-white mb-1 line-clamp-2">
              {title}
            </h3>
            <div className="flex items-center mb-1">
              <Avatar className="h-5 w-5 mr-1.5">
                <AvatarFallback className="bg-code-blue text-white text-xs">
                  {creatorInitials}
                </AvatarFallback>
              </Avatar>
              <span className="text-gray-400 text-xs">{creatorName}</span>
            </div>
            <div className="flex flex-wrap gap-1 mb-1">
              {tags.slice(0, 2).map((tag, index) => (
                <Tag key={index} tag={tag} size="small" />
              ))}
            </div>
            <div className="flex items-center justify-between text-gray-400 text-xs">
              <span>{formatNumber(views)} views</span>
              <div className="flex items-center gap-2">
                <span className="flex items-center">
                  <ThumbsUp className="h-3 w-3 mr-1" />
                  {formatNumber(likes)}
                </span>
              </div>
            </div>
          </div>
        </a>
      </Link>
    );
  }

  return (
    <Link href={`/video/${id}`}>
      <a className="block bg-[#1f2937] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition border border-gray-700 hover:border-gray-600">
        <div className="relative">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-48 object-cover"
          />
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white px-2 py-1 text-xs rounded">
            {duration}
          </div>
          <div className={`absolute top-2 right-2 ${getDifficultyClass(difficulty)} px-2 py-1 text-xs rounded`}>
            {difficulty}
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
            {title}
          </h3>
          <div className="flex items-center mb-3">
            <Avatar className="h-6 w-6 mr-2">
              <AvatarFallback className="bg-code-blue text-white text-xs">
                {creatorInitials}
              </AvatarFallback>
            </Avatar>
            <span className="text-gray-400 text-sm">{creatorName}</span>
          </div>
          <div className="flex flex-wrap gap-1 mb-3">
            {tags.slice(0, 3).map((tag, index) => (
              <Tag key={index} tag={tag} size="small" />
            ))}
          </div>
          <div className="flex items-center justify-between text-gray-400 text-sm">
            <span>{formatNumber(views)} views</span>
            <div className="flex items-center gap-3">
              <span className="flex items-center">
                <ThumbsUp className="h-4 w-4 mr-1" />
                {formatNumber(likes)}
              </span>
              <span className="flex items-center">
                <MessageSquare className="h-4 w-4 mr-1" />
                {formatNumber(comments)}
              </span>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default VideoCard;
