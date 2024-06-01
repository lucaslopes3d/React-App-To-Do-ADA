import { useCallback, useMemo, useState } from "react";

interface MemoizationProps {
  financialData: {
    incomes: number[];
    outcomes: number[];
  }
};


export const Memoization: React.FC<MemoizationProps> = ({financialData}) => {
  const [showValues, setShowValues] = useState(true);

  const totalIcomes = useMemo(() => {
    return financialData.incomes.reduce((total, income) => {
      console.log('Calculando o total de receitas.')
      return total += income;
    }, 0);
  }, [financialData.incomes]);

  const totalOutcomes = useMemo(() => {
      return financialData.outcomes.reduce((total, outcome) => {
      console.log('Calculando o total de receitas.')
      return total += outcome;
    }, 0);
  }, [financialData.outcomes]);

  

  const aplicarDesconto = useCallback((desconto: number) => {
    return console.log(totalOutcomes * (1 - desconto));
  }, [totalOutcomes])

  
  return(
    <div style={{padding: '2rem'}}>
      <h1>Memoization</h1>
        
      <h2>useMemo</h2>

      <p>{`Total de receitas R$ ${showValues ? totalIcomes : 'XXXXX'}`}</p>
      <br />
      <p>{`Total de despesas R$ ${showValues ? totalOutcomes : 'XXXXX'}`}</p>

      <br />
      <br />
      <button onClick={() => setShowValues(!showValues)}>
        { showValues ? 'Ocultar valores' : 'Mostrar valores' }
      </button>
    </div>
  )
}