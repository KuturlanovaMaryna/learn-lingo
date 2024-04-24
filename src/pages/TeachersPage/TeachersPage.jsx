import { useState, useEffect } from 'react';
import {
  ref,
  query,
  onValue,
  orderByKey,
  startAt,
  endBefore,
} from 'firebase/database';
import { db } from '../../firebase';
import TeacherItem from '../../components/TeacherItem/TeacherItem';
import { nanoid } from 'nanoid';
import { CardWrapper, StyledPage } from './TeachersPage.styled';

export const TeachersPage = () => {
  const [data, setData] = useState([]);
  const [currentOffset, setCurrentOffset] = useState(4);
  const [noData, setNoData] = useState(true);
  const dataLength = data.length;

  useEffect(() => {
    loadDataFromFB();
  }, []);

  const loadDataFromFB = async () => {
    const baseFetch = query(
      ref(db),
      orderByKey(),
      endBefore(String(currentOffset))
    );
    const updFetch = query(
      ref(db),
      orderByKey(),
      startAt(String(currentOffset)),
      endBefore(String(currentOffset + 4))
    );
    const queryRef = dataLength > 0 ? updFetch : baseFetch;

    try {
      onValue(queryRef, (snapshot) => {
        const newData = [];
        snapshot.forEach((childSnapshot) => {
          newData.push(childSnapshot.val());
        });

        setData([...data, ...newData]);
        setCurrentOffset(dataLength + 4);

        if (newData.length < 4 && dataLength > 0) setNoData(false);
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  console.log(data);
  return (
    <StyledPage>
      {dataLength > 0 && (
        <CardWrapper>
          {data.map((card) => (
            <TeacherItem key={nanoid()} card={card} />
          ))}
        </CardWrapper>
      )}
      {noData && <button onClick={loadDataFromFB}>Load more</button>}
    </StyledPage>
  );
};
