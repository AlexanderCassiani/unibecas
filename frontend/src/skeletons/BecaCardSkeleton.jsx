import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const BecaCardSkeleton = () => {
  return (
    <div>
      <Skeleton
        width={300}
        height={400}
        borderRadius={14}
        baseColor="var(--skeleton-background)"
      />
    </div>
  );
};

export default BecaCardSkeleton;
