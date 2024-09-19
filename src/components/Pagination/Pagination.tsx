import PageButton from './PageButton';

interface PaginationProps {
  pokemonsPerPage: number;
  totalPokemons: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}

export default function Pagination({ pokemonsPerPage, totalPokemons, paginate, currentPage }: PaginationProps) {
  const pageNumbers: number[] = [];
  const totalPages = Math.ceil(totalPokemons / pokemonsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = () => {
    const pageRange = 5;
    let startPage = Math.max(1, currentPage - Math.floor(pageRange / 2));
    let endPage = Math.min(totalPages, startPage + pageRange - 1);

    if (endPage - startPage + 1 < pageRange) {
      startPage = Math.max(1, endPage - pageRange + 1);
    }

    return (
      <>
        <PageButton number={1} onClick={() => paginate(1)} isActive={currentPage === 1} />
        {startPage > 2 && <span className="mx-1">...</span>}
        {pageNumbers.slice(startPage - 1, endPage).map((number) => (
          <PageButton
            key={number}
            number={number}
            onClick={() => paginate(number)}
            isActive={currentPage === number}
          />
        ))}
        {endPage < totalPages - 1 && <span className="mx-1">...</span>}
        {totalPages > 1 && (
          <PageButton
            number={totalPages}
            onClick={() => paginate(totalPages)}
            isActive={currentPage === totalPages}
          />
        )}
      </>
    );
  };

  return (
    <nav className="flex justify-center mt-4 mb-8">
      <ul className="flex items-center">
        <PageButton
          number={<>&laquo;</>}
          onClick={() => paginate(Math.max(1, currentPage - 1))}
          isActive={false}
          disabled={currentPage === 1}
        />
        {renderPageNumbers()}
        <PageButton
          number={<>&raquo;</>}
          onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
          isActive={false}
          disabled={currentPage === totalPages}
        />
      </ul>
    </nav>
  );
}
