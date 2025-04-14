"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationWrapperProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const PaginationComp  = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationWrapperProps) => {
  const renderPages = () => {
    const pages = [];

    if (currentPage > 1) {
      pages.push(
        <PaginationItem key="prev">
          <PaginationPrevious onClick={() => onPageChange(currentPage - 1)} href="#" />
        </PaginationItem>
      );
    }

    pages.push(
      <PaginationItem key={1}>
        <PaginationLink
          onClick={() => onPageChange(1)}
          href="#"
          isActive={currentPage === 1}
        >
          1
        </PaginationLink>
      </PaginationItem>
    );

    if (currentPage > 3) {
      pages.push(
        <PaginationItem key="start-ellipsis">
          <PaginationEllipsis />
        </PaginationItem>
      );
    }

    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      pages.push(
        <PaginationItem key={i}>
          <PaginationLink
            onClick={() => onPageChange(i)}
            href="#"
            isActive={currentPage === i}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }

    if (currentPage < totalPages - 2) {
      pages.push(
        <PaginationItem key="end-ellipsis">
          <PaginationEllipsis />
        </PaginationItem>
      );
    }

    if (totalPages > 1) {
      pages.push(
        <PaginationItem key={totalPages}>
          <PaginationLink
            onClick={() => onPageChange(totalPages)}
            href="#"
            isActive={currentPage === totalPages}
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }

    if (currentPage < totalPages) {
      pages.push(
        <PaginationItem key="next">
          <PaginationNext onClick={() => onPageChange(currentPage + 1)} href="#" />
        </PaginationItem>
      );
    }

    return pages;
  };

  return (
    <Pagination>
      <PaginationContent>{renderPages()}</PaginationContent>
    </Pagination>
  );
};
