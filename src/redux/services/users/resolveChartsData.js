const chartsData = {
    totalUsers: {
        labels: ['January', 'February', 'March', 'April', 'May', 'Jun', 'Jul'],
        value: [370, 90, 950, 530, 800, 960, 650],
    },
    activeUsers: {
        labels: ['January', 'February', 'March', 'April', 'May', 'Jun', 'Jul'],
        value: [370, 90, 950, 530, 800, 960, 800],
    },
};

export default function resolveChartsData() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(chartsData), 2000);
    });
}
