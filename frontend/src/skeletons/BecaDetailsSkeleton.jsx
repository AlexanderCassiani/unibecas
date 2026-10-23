import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const BecaDetailsSkeleton = () => {
  return (
    <div>
      <div style={{ marginBottom: "18px" }}>
        <Skeleton
          width={800}
          height={40}
          baseColor="var(--skeleton-background)"
        />
      </div>
      <div style={{ marginBottom: "18px" }}>
        <Skeleton
          width={600}
          height={30}
          baseColor="var(--skeleton-background)"
        />
      </div>
      <Skeleton
        count={3}
        width={1172}
        height={20}
        baseColor="var(--skeleton-background)"
      />
      <div style={{ margin: "48px 0 22px 0" }}>
        <Skeleton
          width={150}
          height={30}
          baseColor="var(--skeleton-background)"
        />
      </div>
      <Skeleton
        count={3}
        width={1172}
        height={20}
        baseColor="var(--skeleton-background)"
      />
    </div>
  );
};

export default BecaDetailsSkeleton;
