interface Props {
  path: string
}

export const Image = ({ path }: Props) => {
  return (
    <div key={path} style={{ display: 'inline-block' }}>
      <img
        style={{
          objectFit: 'cover',
          width: '250px',
          height: '250px',
          margin: '8px',
          cursor: 'pointer',
        }}
        src={`bs://${path}`}
      />
    </div>
  )
}
