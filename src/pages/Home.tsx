
const Home = () => {
	const wrapper =
		'flex h-screen justify-center items-center bg-background select-none';
	const content = 'flex items-center mobile:flex-col-reverse';
	return (
		<div className={wrapper}>
			<div className={content}>
				<div className='flex items-center flex-col'>
					<h1 className='text-[3rem] mobile:text-[2rem]'>
						Vite React Tailwind Template!
					</h1>
					<h1 className='text-[1rem] mobile:text-[2rem]'>
						(its-tahir)
					</h1>
				</div>
			</div>
		</div>
	);
};

export default Home;
