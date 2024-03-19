import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummeryContainer, SummeryCard } from "./styles";
import { priceFormatter } from "../../utils/formatter";
import { useSummary } from "../../hooks/useSummary";

export function Summary () {
    const summary = useSummary();

    return (
        <SummeryContainer>
            <SummeryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color="#00b37e" />
                </header>

                <strong>{priceFormatter.format(summary.income)}</strong>
            </SummeryCard>

            <SummeryCard>
                <header>
                    <span>Saídas</span>
                    <ArrowCircleDown size={32} color="#f74a68"/>
                </header>

                <strong>{priceFormatter.format(summary.outcome)}</strong>
            </SummeryCard>

            <SummeryCard variant="green">
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color="#fff"/>
                </header>

                <strong>{priceFormatter.format(summary.total)}</strong>
            </SummeryCard>
        </SummeryContainer>
    )
}