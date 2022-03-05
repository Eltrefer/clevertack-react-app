import React from 'react';
import { Card } from './Card';

export default function Card_list() {
  const props = [
    { name: 'Spider-man', img: 'http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b.jpg', description: '' },
    { name: "Batman", img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/415c73ae-5d9b-4a66-9155-589f0f5199a3/d9tvd1s-1c9b5d19-23ad-437a-bff4-9b16240baabf.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQxNWM3M2FlLTVkOWItNGE2Ni05MTU1LTU4OWYwZjUxOTlhM1wvZDl0dmQxcy0xYzliNWQxOS0yM2FkLTQzN2EtYmZmNC05YjE2MjQwYmFhYmYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.yNFFYgwZE6u-35TkCYxr0_fTkZ-IRN44DHWAuxIyVes", description: '' },
    { name: "Logan", img: "http://i.annihil.us/u/prod/marvel/i/mg/2/60/537bcaef0f6cf.jpg", description: '' },
    { name: "Maybe baby", img: "https://coub-anubis-a.akamaized.net/coub_storage/coub/simple/cw_timeline_pic/1c8c48fe1b6/512756586e2699ddc8546/ios_large_1611156327_image.jpg", description: '' }
  ]
  return (
    <div className='container'>
      <h1>Marvel Heroes</h1>
      <div className='card-list'>
        <Card props={props[0]}/>
        <Card props={props[1]} />
        <Card props={props[2]} />
        <Card props={props[3]} />
      </div>
    </div>
  )
}