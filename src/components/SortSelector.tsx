import { BsChevronDown } from "react-icons/bs";
import { Button } from "../component/ui/button";
import {
  MenuItem,
  MenuRoot,
  MenuTrigger,
  MenuContent,
} from "../component/ui/menu";
import useMovieQueryStore from "../store";

const SortSelector = () => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "popularity.desc", label: "Popularity" },
    { value: "primary_release_date.desc", label: "Release_date" },
    { value: "vote_average.desc", label: "Rating" },
  ];

  const sortOrder = useMovieQueryStore((s) => s.movieQuery.sortOrder);
  const onSelectSortOrder = useMovieQueryStore((s) => s.setSortOrder);

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <MenuRoot>
      <MenuTrigger>
        <Button>
          Order by: {currentSortOrder?.label || "Relevance"} <BsChevronDown />
        </Button>
        <MenuContent>
          {sortOrders.map((sortOrder) => (
            <MenuItem
              onClick={() => onSelectSortOrder(sortOrder.value)}
              key={sortOrder.value}
              value={sortOrder.value}
            >
              {sortOrder.label}
            </MenuItem>
          ))}
        </MenuContent>
      </MenuTrigger>
    </MenuRoot>
  );
};

export default SortSelector;
