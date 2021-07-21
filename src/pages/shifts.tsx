import { NextPage } from 'next';
import Link from 'next/link';

import { Info, DateTime } from 'luxon';
import useSWR from 'swr';

import { FC } from 'react';

import { stringToTime } from '@utils/date';

import Spinner from '@components/Spinner';
import Layout from '@components/Layout';
import Page from '@components/Page';

import Shift from '@models/shifts';

import styles from './shifts.module.scss';

interface APIResponse {
	updated: Date;
	parsed: Shift[];
}

const Error: FC = () => (
	<>
		<div className={styles.error}>
			<h1>Error retrieving shift information</h1>
			<button className="button">Retry</button>
			<Link href="/">
				<a>
					<button className="button">Go back</button>
				</a>
			</Link>
		</div>
	</>
);

const Table: FC = () => {
	const { data, error } = useSWR<APIResponse>('https://api.g-vm.nl/appie');

	if (error) {
		return <Error />;
	}

	if (!data) {
		return (
			<>
				<Spinner />
				<h1>Retrieving shift information...</h1>
			</>
		);
	}

	if (data) {
		const weeks = new Map<number, Record<string, Shift>>();

		data.parsed.forEach((shift) => {
			const weekNumber = DateTime.fromISO(shift.start).weekNumber;
			const dayName = DateTime.fromISO(shift.start).weekdayLong;

			const current = weeks.get(weekNumber);

			weeks.set(weekNumber, { ...current, [dayName]: shift });
		});

		return (
			<table className={styles.table}>
				<caption>
					<h1 className={styles.tableHeader}>Work timesheet</h1>
				</caption>
				<thead>
					<tr className={styles.weekDays}>
						<th></th>
						{Info.weekdays().map((day) => (
							<th key={day}>{day}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{Array.from(weeks).map(([weekNumber, week], i) => (
						<tr key={i}>
							<th>{weekNumber}</th>
							{Info.weekdays().map((weekDay) => {
								week[weekDay] ? (
									<td key={week[weekDay].start}>
										{stringToTime(week[weekDay].start)} - {stringToTime(week[weekDay].end)}
									</td>
								) : (
									<td></td>
								);
							})}
						</tr>
					))}
				</tbody>
			</table>
		);
	}
};

const Shifts: NextPage = () => (
	<Page description="Check mijn AH rooster" title="Shifts">
		<Layout>
			<div className={styles.body}>
				<div className={styles.content}>
					<div>
						<Table />
					</div>
				</div>
			</div>
		</Layout>
	</Page>
);

export default Shifts;
