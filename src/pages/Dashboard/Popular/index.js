import useSeries from '../../../hooks/api/useSeries';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Serie from './SerieCard';
import useSerieById from '../../../hooks/api/useSerieById';

export default function Popular() {

    const [series, setSeries] = useState([]);
    const { getSeries } = useSeries();
    const [selectedSerie, setSelectedSerie] = useState('');
    const { getSerieById } = useSerieById(selectedSerie);
    const [choosedSerie, setChoosedSerie] = useState([]);

    const handleSelectSerie = (serie) => {
      if (serie.id === selectedSerie) {
        setSelectedSerie(0);
      } else {
        setSelectedSerie(serie.id);
      }
    };

    useEffect(async () => {
      const data = await getSeries();
      setSeries(data);
    }, []);

    useEffect(() => {
      const promisse = getSerieById(selectedSerie);
      promisse.then((p) => {
        if (p) setChoosedSerie(p);
      });
    }, [selectedSerie]);

    return (
        <>
            <MenuHeader>Séries:</MenuHeader>
            <DateBrowser>
                {series.map((serie, index) => (
                <Serie
                    key={index}
                    index={index}
                    name={serie.name}
                    image={serie.image}
                    synopsis={serie.synopsis}
                    selected={serie === selectedSerie}
                    handleSelectSerie={() => handleSelectSerie(serie)}
                ></Serie>
                ))}
            </DateBrowser>
        </>
    )
}

const MenuHeader = styled.div`
  color: #8e8e8e;
  font-size: 20px;
  margin-bottom: 18px;
`;
const DateBrowser = styled.div`
  display: flex;
  flex-direction: row;
  gap: 17px;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  flex-wrap: wrap;
  margin-bottom: 61px;
`;
const DateContainer = styled.div`
  width: 131px;
  height: 37px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.selected ? '#FFD37D' : '#E0E0E0')};
  border-radius: 4px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  font-size: 14px;
  color: black;
  line-height: 16.41px;
  cursor: pointer;
`;