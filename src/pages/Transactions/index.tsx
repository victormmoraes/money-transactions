import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
    return (
        <div>
            <Header />
            <Summary />



            <TransactionsContainer>
                <SearchForm />

                <TransactionsTable>
                    <tbody>
                        <tr>
                            <td width="50%">Entrada</td>
                            <td>
                                <PriceHighlight variant="income">
                                    R$500.00
                                </PriceHighlight>
                            </td>
                            <td>Categoria</td>
                            <td>27/03/2023</td>
                        </tr>
                        <tr>
                            <td width="50%">Saída</td>
                            <td>
                                <PriceHighlight variant="outcome">
                                    - R$500.00
                                </PriceHighlight>
                            </td>
                            <td>Categoria</td>
                            <td>27/03/2023</td>
                        </tr>
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}