import { Badge } from "@/components/common/badge";

export const TechnologyList = ({ list }: { list: string[] }) => {
  return (
    <ul className="flex flex-wrap gap-2">
      {list.map((item, index) => (
        <li key={`${item}-${index}`}>
          <Badge>{item}</Badge>
        </li>
      ))}
    </ul>
  );
};

export default TechnologyList;
