export async function GET(
  request: Request,
  { params }: { params: { name: string } }
) {
  return Response.json({ title: `A ${params.name} from api routes` })
}
