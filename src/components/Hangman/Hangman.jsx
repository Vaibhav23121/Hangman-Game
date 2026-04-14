import Level1 from '../../assets/Images/1.png';
import Level2 from '../../assets/Images/2.png';
import Level3 from '../../assets/Images/3.png';
import Level4 from '../../assets/Images/4.png';
import Level5 from '../../assets/Images/5.png';
import Level6 from '../../assets/Images/6.png';

function Hangman( {step} ){
    const images = [Level1,Level2,Level3,Level4,Level5,Level6];
   
    const isGameOver = step >= images.length - 1;
    return(
    <div className="relative w-[300px] h-[300px]">
        <div className='w-[300px] h-[300px]'>
            <img src={step >=images.lenth ? images[images.legth-1]:images[step]} />


        </div>
        {/* Game Over Overlay */}
        {isGameOver && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-white text-2xl font-bold">Game Over 💀</h1>
        </div>
      )}
    </div>
    )
}

export default Hangman;