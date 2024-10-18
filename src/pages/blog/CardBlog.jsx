import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

const CardBlog = ({ users }) => {
  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };
  return (
    <Card className="flex flex-col justify-between">
      <CardHeader className="p-0">
        <img
          src={users?.thumbnail}
          alt={users?.title}
          className="w-full rounded-t-md object-cover"
        />
      </CardHeader>
      <CardContent className="space-y-2 mt-5">
        <CardTitle className="leading-tight">{users?.title}</CardTitle>
        <CardDescription>{users?.description}</CardDescription>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-2">
        <p className="text-muted-foreground text-xs">
          Publish : {formatDate(users?.pubDate)}
        </p>
        <Button className="w-full" size="sm">
          View Detail
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardBlog;
