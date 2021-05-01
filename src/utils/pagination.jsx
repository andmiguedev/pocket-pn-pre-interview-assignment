
export function handlePagination(buttonType, record) {
   if (buttonType === 'prev') {
      return <a href="#0">Back</a>
   }
   if (buttonType === 'next') {
      return <a href="#0">Next</a>
   }

   return record;
}