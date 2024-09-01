import type { NextApiRequest, NextApiResponse } from 'next'
 
type playerinfo = {
  id : number,
  name : String,
}
type playerlist = {
  players : playerinfo,
}

export async function GET() {
  return Response.json({"test":"data"});
}

export async function POST(req: Request, res: Response, ...prop : any[]) {

  //const comment = await req.json();
  //console.log(comment);
  
  const comment : playerlist = await req.json();
  const newcomment : playerinfo = {
    id : comment.players.id + 1,
    name: comment.players.name
  }

  return Response.json(comment);
}