import { memo } from "react";

const SearchList = memo(function SearchList({ query }) {
  let items = [];
  for (let i = 0; i < 50; i++) {
    items.push(<SeathItem key={i} query={query} />);
  }
  return <ul>{items}</ul>;
});

const SeathItem = ({ query }) => {
  let startTime = performance.now();
  while (performance.now() - startTime < 10) {}
  return <li>Введено: {query}</li>;
};

export default SearchList;
 