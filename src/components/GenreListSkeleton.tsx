import { Box, Card, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Skeleton>
        <SkeletonText />
      </Skeleton>
    </Card>
  );
};

export default GenreListSkeleton;
