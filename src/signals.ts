import { createEffect, createMemo, createRoot, createSignal } from "solid-js";
import { setSoftkeys } from "./utils";
import Decimal from "decimal.js";

const signals = createRoot(() => {
	const [mounted, setMounted] = createSignal(false);

	const [view, setView] = createSignal<"home" | "categories" | "add">("home");

	const [currency, setCurrency] = createSignal("€");

	const [decimalPlaces, setDecimalPlaces] = createSignal(2);

	function formatCurrency(value: Decimal) {
		const fixed = decimalPlaces();
		const abs = Decimal.abs(value);
		let formatted = "";

		if (abs.gte(1.0e12)) {
			formatted = abs.div(1.0e12).toFixed(fixed) + "T";
		} else if (abs.gte(1.0e9)) {
			formatted = abs.div(1.0e9).toFixed(fixed) + "B";
		} else if (abs.gte(1.0e6)) {
			formatted = abs.div(1.0e6).toFixed(fixed) + "M";
		} else if (abs.gte(1.0e3)) {
			formatted = abs.div(1.0e3).toFixed(fixed) + "K";
		} else {
			formatted = abs.toFixed(fixed);
		}

		return formatted;
	}

	createEffect(() => {
		const currentView = view();

		if (!mounted()) return;

		switch (currentView) {
			case "home":
				setSoftkeys("List", "ADD", "Menu");
				break;
		}
	});

	const ZERO = Decimal(0);

	const [totalDeposit, setTotalDeposit] = createSignal(ZERO);
	const [totalWithdraw, setTotalWithdraw] = createSignal(ZERO);

	setTotalDeposit(Decimal("100.50"));
	setTotalWithdraw(Decimal("23"));

	const balance = createMemo(() => totalDeposit().minus(totalWithdraw()));

	return {
		mounted,
		setMounted,
		view,
		setView,
		totalDeposit,
		setTotalDeposit,
		totalWithdraw,
		setTotalWithdraw,
		balance,
		currency,
		setCurrency,
		decimalPlaces,
		setDecimalPlaces,
		formatCurrency,
	};
});

export default signals;
