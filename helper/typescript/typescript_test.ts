export function out(statements: any[]) {
  statements.forEach((statement) => {
    const str = JSON.stringify(statement.toJSON(), null, 4);
    console.log(str);
  });
}

export function deploy(statements: any[]) {
  //@TODO: needs to be implemented
  if (false) {
    console.log(statements);
  }
}
