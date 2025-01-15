import React from 'react'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { Link } from 'react-router';

function CharacterCard({ character }) {

  let urlName = character.name.toLowerCase().split(" ").join("-")  //Url için boşlukları kaldırıp tire ekleme işlemi
  return (
    <div className='group h-60 bg-blue-100 rounded hover:bg-blue-200'>
      <p className={` text-green-400 font-bold text-center my-2 group-hover:text-white ${character.name.length < 16 ? "text-xl" : "text-base"}`}>{character.name}</p>
      <div className=' flex justify-center'>
        <img className='object-cover max-h-40 rounded-full' src={character.image} />
      </div>
      <div className='flex justify-end mr-2 mb-2'>
        <Link to={`/detail/${urlName}`} state={{id: character.id}}>
          <ArrowCircleRightOutlinedIcon fontSize='large' color='action' className='cursor-pointer' />
        </Link>
      </div>


    </div>
  )
}

export default CharacterCard