'use client'

import { Button } from "@/components/ui/Button";
import { useState, useMemo } from "react";

type PaginationSectionType = {
    transactionsLength: number,
    onPageChange?: (startIndex: number, endIndex: number) => void,
    itemsPerPage?: number,
}

export default function PaginationSection({
    transactionsLength,
    onPageChange,
    itemsPerPage = 10
}: PaginationSectionType) {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = useMemo(() => {
        return Math.ceil(transactionsLength / itemsPerPage);
    }, [transactionsLength, itemsPerPage]);

    const handlePrevious = () => {
        if (currentPage > 1) {
            const newPage = currentPage - 1;
            setCurrentPage(newPage);
            const startIndex = (newPage - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            onPageChange?.(startIndex, endIndex);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            const newPage = currentPage + 1;
            setCurrentPage(newPage);
            const startIndex = (newPage - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            onPageChange?.(startIndex, endIndex);
        }
    };

    const handlePageClick = (page: number) => {
        setCurrentPage(page);
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        onPageChange?.(startIndex, endIndex);
    };

    const getPageNumbers = () => {
        const pages = [];
        const maxPagesToShow = 5;

        if (totalPages <= maxPagesToShow) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (currentPage <= 3) {
                for (let i = 1; i <= maxPagesToShow; i++) {
                    pages.push(i);
                }
                pages.push('...');
                pages.push(totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(1);
                pages.push('...');
                for (let i = totalPages - maxPagesToShow + 1; i <= totalPages; i++) {
                    pages.push(i);
                }
            } else {
                pages.push(1);
                pages.push('...');
                for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                    pages.push(i);
                }
                pages.push('...');
                pages.push(totalPages);
            }
        }
        return pages;
    };

    if (totalPages <= 1) return null;

    return (
        <div className="flex justify-between items-center mt-(--space-300)">
            <Button
                variant="secondary"
                withIcon
                iconDirection="left"
                disabled={currentPage === 1}
                onClick={handlePrevious}
            >
                Prev
            </Button>

            <div className="inline-flex gap-2">
                {getPageNumbers().map((page, index) => (
                    <Button
                        key={index}
                        withIcon={false}
                        variant={page === currentPage ? 'primary' : 'secondary'}
                        onClick={() => typeof page === 'number' && handlePageClick(page)}
                                       disabled={page === '...'}

                    >
                        {page}
                    </Button>
                ))}
            </div>

            <Button
                variant="secondary"
                withIcon
                iconDirection="right"
                disabled={currentPage === totalPages}
                onClick={handleNext}
            >
                Next
            </Button>
        </div>
    )
}