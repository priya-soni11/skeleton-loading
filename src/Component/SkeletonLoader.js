import { Skeleton } from "antd";

const SkeletonLoader = () => {
  return (
    <Skeleton
      active
      title={false}
      paragraph={{
        rows: 2,
        width: [700, 1100],
        style: { margin: 20 },
      }}
    ></Skeleton>
  );
};

export default SkeletonLoader;
