import axios from "axios";
import styled from "styled-components";
import AddButton from "../buttons/AddButton";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

const BookDetails = ({ book, checkReadBook }) => {
  const [isRead, setIsRead] = useState(false);

  useEffect(() => {
    setIsRead(checkReadBook(book.id));
  }, [book.id, checkReadBook]);
  console.log(" Book  ", book);
  const unreadBook = async () => {
    const res = await axios.delete("/v1/api/reading/" + book.id, book);
    console.log("Response ", res);

    if (!res) {
      toast.error("Book not removed!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          backgroundColor: "darkred",
        },
      });
      return;
    }
    toast.success("Book removed!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: {
        backgroundColor: "darkblue",
      },
    });
    setIsRead(!isRead);
  };
  const markAsRead = async () => {
    const res = await axios.post("/v1/api/reading/" + book.id, book);
    console.log("Response ", res);

    if (!res) {
      toast.error("Book not added!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          backgroundColor: "darkred",
        },
      });
      return;
    }
    toast.success("Book added!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: {
        backgroundColor: "darkblue",
      },
    });
    setIsRead(!isRead);
  };

  return (
    <Container>
      <Info>
        <div className="book-image">
          <img src={book.image_link} alt={book.title} />
        </div>
        <div className="book-info">
          <h1 className="book-info__title">{book.title}</h1>
          <p className="book-info__description">{book.description}</p>
          <div className="book-info__buttons">
            {isRead ? (
              <AddButton
                text={"Unread"}
                handleClick={async () => {
                  await unreadBook();
                }}
              />
            ) : (
              <AddButton
                text={"Mark as read"}
                handleClick={async () => {
                  await markAsRead();
                }}
              />
            )}

            <AddButton
              text={"Add to collection"}
              color="#413F2A"
              bgColor={"#D6C957"}
            />
          </div>
        </div>
      </Info>
      <Details>
        <span>
          Comments Section or Author Description or from where to buy the book
        </span>
      </Details>
    </Container>
  );
};

export default BookDetails;

const Container = styled.div`
  grid-area: 1 / 1 / 3 / 3;
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  gap: 1.5rem;
  @media screen and (max-width: 1280px) {
    grid-area: 1 / 1 / 3 / 4;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`;
const Info = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  width: 95%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 2rem;
  padding-bottom: 2rem;
  border-bottom: thick solid white;
  border-radius: 1px;
  border-color: #393b3d;
  margin-bottom: 1.5rem;
  .book-image {
    grid-area: 1 / 1 / 4 / 2;
    img {
      width: 237px;
      height: 359px;
      border-radius: 5px;
      object-fit: fill;
    }
  }

  .book-info {
    grid-area: 1 / 2 / 4 / 4;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
    margin-right: 1rem;

    h1 {
      font-weight: 500;
      font-size: 24px;
    }
    p {
      font-weight: 300;
      line-height: 20px;
      font-size: 0.9rem;
    }
    .book-info__buttons {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
    }
  }
  @media screen and (max-width: 1280px) {
    grid-area: 1 / 1 / 2 / 4;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    .book-image {
      grid-area: 1 / 1 / 2 / 2;
    }
    .book-info {
      grid-area: 1 / 2 / 2 / 4;
    }
  }
  @media screen and (max-width: 780px) {
    flex: 2;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;

    .book-info {
      justify-content: center;
      align-items: center;
      gap: 1.3rem;
    }
  }
`;
const Details = styled.div`
  grid-area: 2 / 1 / 3 / 2;
  height: 100%;
  display: grid;
  place-items: center;
  place-content: center;
  span {
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
  }
  @media screen and (max-width: 1280px) {
    grid-area: 2 / 1 / 3 / 4;
  }
`;
