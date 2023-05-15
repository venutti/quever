"use client";
import { useState } from "react";
import { BiMoviePlay as MovieIcon } from "react-icons/bi";
import { Image, Modal } from "antd";

interface MovieModalProps {
  title: string | undefined;
  overview: string | undefined;
  voteAverage: number | undefined;
  posterPath: string | undefined;
}

export default function MovieModal({
  title,
  overview,
  voteAverage,
  posterPath,
}: MovieModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button className="hover:underline" onClick={handleModalOpen}>
        Ver detalles
      </button>
      <Modal
        title={
          <h3 className="text-2xl font-semibold flex items-center gap-2">
            <MovieIcon className="text-red-500" />
            Detalle
          </h3>
        }
        open={isModalOpen}
        footer={null}
        onCancel={handleModalClose}
        centered
      >
        <div className="flex flex-col md:flex-row items-center p-4 gap-4 max-h-[500px] overflow-auto">
          <Image src={posterPath} alt={title} width={200} height={300} />
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="">{overview}</p>
            <p className="">
              <span className="font-bold">Puntuación:</span> {voteAverage}
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
}
