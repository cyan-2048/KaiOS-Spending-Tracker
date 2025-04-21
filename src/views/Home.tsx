import * as styles from "./Home.module.scss";
import signals from "@/signals";

export default function Home() {
	const { balance, currency, decimalPlaces, totalDeposit, totalWithdraw, formatCurrency } = signals;

	return (
		<div class={styles.home}>
			<div class={styles.header}>Spending Tracker</div>
			<div class={styles.circle_container}>
				<div class={styles.circle}>
					<div class={styles.label}>Balance</div>
					<div class={styles.money}>
						{balance().isNegative() ? "-" : ""}
						{currency()}
						{formatCurrency(balance())}
					</div>
				</div>
			</div>
			<div>
				<div class={styles.label}>Total deposit:</div>
				<div class={styles.money}>
					{currency()}
					{formatCurrency(totalDeposit())}
				</div>
			</div>
			<div>
				<div class={styles.label}>Total withdraw:</div>
				<div class={styles.money}>
					{currency()}
					{formatCurrency(totalWithdraw())}
				</div>
			</div>
		</div>
	);
}
