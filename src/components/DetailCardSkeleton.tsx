import { Card, CardBody } from "@chakra-ui/react/card";
import { Skeleton, SkeletonText } from "../component/ui/skeleton";

const DetailCardSkeleton = () => {
  return (
    <Card.Root width="300px">
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card.Root>
  );
};

export default DetailCardSkeleton;
