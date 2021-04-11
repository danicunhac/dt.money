import { useContext } from 'react';
import { formatMoney } from '../../utils/formatUtils';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { TransactionsContext } from '../../TransactionsContext';

import { Container } from './styles';

export function Summary() {
  const { transactions } = useContext(TransactionsContext);

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'deposit') {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraws += transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <div>
        <header>
          <span>Entradas</span>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>{formatMoney(summary.deposits)}</strong>
      </div>
      <div>
        <header>
          <span>Saídas</span>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>{formatMoney(summary.withdraws)}</strong>
      </div>
      <div className="highlight__background">
        <header>
          <span>Total</span>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>{formatMoney(summary.total)}</strong>
      </div>
    </Container>
  );
}
