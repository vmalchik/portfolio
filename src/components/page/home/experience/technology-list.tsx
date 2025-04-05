import { Badge } from "@/components/common/badge";

export const TechnologyList = ({ list }: { list: string[] }) => {
  return (
    <div>
      {list.map((item, index) => (
        <Badge key={`${item}-${index}`}>{item}</Badge>
      ))}
    </div>
  );
};

export default TechnologyList;
