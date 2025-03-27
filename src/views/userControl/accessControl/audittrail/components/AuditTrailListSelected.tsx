import { useState } from 'react'
import StickyFooter from '@/components/shared/StickyFooter'
import Button from '@/components/ui/Button'
import ConfirmDialog from '@/components/shared/ConfirmDialog'
import useAuditTrailList from '../hooks/useAuditTrailList'
import { TbChecks } from 'react-icons/tb'

const AuditTrailListSelected = () => {
  const {
    selectedAuditTrail,
    audittrailList,
    mutate,
    audittrailListTotal,
    setSelectAllAuditTrail,
  } = useAuditTrailList()

  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false)

  const handleDelete = () => {
    setDeleteConfirmationOpen(true)
  }

  const handleCancel = () => {
    setDeleteConfirmationOpen(false)
  }

  const handleConfirmDelete = () => {
    const newAuditTrailList = audittrailList.filter((audittrail) => {
      return !selectedAuditTrail.some(
        (selected) => selected.name === audittrail.name,
      )
    })
    setSelectAllAuditTrail([])
    mutate(
      {
        data: newAuditTrailList,
        total: audittrailListTotal - selectedAuditTrail.length,
      },
      false,
    )
    setDeleteConfirmationOpen(false)
  }

  return (
    <>
      {selectedAuditTrail.length > 0 && (
        <StickyFooter
          className=" flex items-center justify-between py-4 bg-white dark:bg-gray-800"
          stickyClass="-mx-4 sm:-mx-8 border-t border-gray-200 dark:border-gray-700 px-8"
          defaultClass="container mx-auto px-8 rounded-xl border border-gray-200 dark:border-gray-600 mt-4"
        >
          <div className="container mx-auto">
            <div className="flex items-center justify-between">
              <span>
                {selectedAuditTrail.length > 0 && (
                  <span className="flex items-center gap-2">
                    <span className="text-lg text-primary">
                      <TbChecks />
                    </span>
                    <span className="font-semibold flex items-center gap-1">
                      <span className="heading-text">
                        {selectedAuditTrail.length} AuditTrail
                      </span>
                      <span>selected</span>
                    </span>
                  </span>
                )}
              </span>

              <div className="flex items-center">
                <Button
                  size="sm"
                  className="ltr:mr-3 rtl:ml-3"
                  type="button"
                  customColorClass={() =>
                    'border-error ring-1 ring-error text-error hover:border-error hover:ring-error hover:text-error'
                  }
                  onClick={handleDelete}
                >
                  Delete
                </Button>
              </div>
            </div>
          </div>
        </StickyFooter>
      )}
      <ConfirmDialog
        isOpen={deleteConfirmationOpen}
        type="danger"
        title="Remove audittrail"
        onClose={handleCancel}
        onRequestClose={handleCancel}
        onCancel={handleCancel}
        onConfirm={handleConfirmDelete}
      >
        <p>
          {' '}
          Are you sure you want to remove these audittrail? This action
          can&apos;t be undo.{' '}
        </p>
      </ConfirmDialog>
    </>
  )
}

export default AuditTrailListSelected
