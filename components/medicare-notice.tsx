import { FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

/**
 * Medicare opt-out notice. Wording supplied by Gordon Hendrickson, PA-C.
 *
 * This is compliance-sensitive copy and appears in more than one place
 * (medical services callout + pricing policies), so it lives here to keep
 * the two from drifting apart. Do not reword without Gordon's sign-off.
 *
 * The contract links directly to the official Noridian opt-out private
 * contract rather than a rewritten or self-hosted copy, so patients always
 * get the current official document.
 */

export const MEDICARE_CONTRACT_URL =
  "https://med.noridianmedicare.com/documents/10525/2052366/Opt-Out%2BPrivate%2BContract.pdf"

export function MedicareNotice() {
  return (
    <div>
      <p className="text-sm text-muted-foreground leading-relaxed">
        <span className="font-semibold text-foreground">Medicare Patients:</span> Medicare opt-out
        means that the medical provider has chosen not to bill Medicare. Medicare-covered services
        are provided through a private agreement between the patient and the provider, and Medicare
        generally does not reimburse the patient or provider for those services. Patients should
        review the agreement carefully and contact Medicare or their supplemental insurer with
        questions about coverage.
      </p>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
        Medicare patients are welcome on a private-pay basis and will sign this agreement before
        receiving care.
      </p>
      <Button variant="outline" size="sm" className="mt-4 bg-transparent" asChild>
        <a href={MEDICARE_CONTRACT_URL} target="_blank" rel="noopener noreferrer">
          <FileText className="mr-2 h-4 w-4" aria-hidden="true" />
          View Medicare Private-Pay Contract
        </a>
      </Button>
    </div>
  )
}
